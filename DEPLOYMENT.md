# Guía de Deployment - New Decade Website

## Configuración Completa

### 1. Secrets de GitHub (YA CONFIGURADOS ✓)

Los siguientes secrets ya están configurados en GitHub:

- `DOCKER_USERNAME` - Usuario de Docker Hub
- `DOCKER_PASSWORD` - Contraseña de Docker Hub
- `DOCKER_EMAIL` - Email de Docker Hub
- `DIGITALOCEAN_ACCESS_TOKEN` - Token de acceso de DigitalOcean
- `DIGITALOCEAN_CLUSTER_ID` - ID del cluster: `9c41aa08-ee4a-491b-a2f0-68569c780143`

### 2. Información del Dominio

**Dominio configurado:** `newdecadedevelop.com`

**URLs después del deployment:**
- https://newdecadedevelop.com
- https://www.newdecadedevelop.com

**Email para certificados SSL:** `info@newdecadedevelop.com`

### 3. Información del Cluster de Kubernetes

**Cluster:** do-sfo3-k8s-new-decade
**Región:** San Francisco (sfo3)
**Namespace:** newdecade
**Imagen Docker:** allcenturyinsurance/newdecade-website

### 4. Archivos de Configuración

#### Docker
- `Dockerfile` - Multi-stage build optimizado
- `.dockerignore` - Archivos excluidos del build
- `next.config.js` - Configurado con `output: 'standalone'`

#### Kubernetes (carpeta k8s/)
- `namespace.yaml` - Namespace "newdecade"
- `deployment.yaml` - Deployment con 1 réplica
- `service.yaml` - Service ClusterIP
- `ingress.yaml` - Ingress sin SSL (desarrollo)
- `ingress-production.yaml` - Ingress con SSL (producción)
- `cluster-issuer.yaml` - Let's Encrypt issuer
- `k8s-new-decade-kubeconfig.yaml` - Kubeconfig para acceso local (NO subir a GitHub)

#### GitHub Actions
- `.github/workflows/deploy.yml` - Pipeline de CI/CD

### 5. Proceso de Deployment Automático (GitHub Actions)

El deployment se ejecuta automáticamente cuando:
- Haces push a la rama `main`
- También puedes ejecutarlo manualmente desde GitHub Actions

**Pasos del pipeline:**
1. Build de la imagen Docker
2. Push a Docker Hub
3. Deploy a Kubernetes
4. Verificación del deployment

### 6. Configuración Inicial Manual (Primera vez en Windows CMD)

**IMPORTANTE:** El archivo `k8s-new-decade-kubeconfig.yaml` contiene credenciales sensibles y NO debe subirse a GitHub.

```cmd
# 1. Configurar kubeconfig
set KUBECONFIG=C:\AllCentury\website-newdecade\k8s\k8s-new-decade-kubeconfig.yaml

# 2. Verificar conexión al cluster
kubectl cluster-info
kubectl get nodes

# 3. Crear namespace (primera vez)
kubectl apply -f C:\AllCentury\website-newdecade\k8s\namespace.yaml

# 4. Crear secret de Docker Hub (primera vez)
kubectl create secret docker-registry dockerhub-secret --docker-server=https://index.docker.io/v1/ --docker-username=TU_USUARIO --docker-password=TU_PASSWORD --docker-email=TU_EMAIL --namespace=newdecade

# 5. Aplicar manifiestos (primera vez)
kubectl apply -f C:\AllCentury\website-newdecade\k8s\deployment.yaml
kubectl apply -f C:\AllCentury\website-newdecade\k8s\service.yaml
kubectl apply -f C:\AllCentury\website-newdecade\k8s\ingress-production.yaml

# 6. Obtener IP del LoadBalancer
kubectl get ingress -n newdecade

# 7. Ver estado de los pods
kubectl get pods -n newdecade
```

### 7. Configuración del Dominio en DNS

Para que el dominio funcione, necesitas configurar los siguientes registros DNS:

1. Obtén la IP del LoadBalancer:
   ```cmd
   set KUBECONFIG=C:\AllCentury\website-newdecade\k8s\k8s-new-decade-kubeconfig.yaml
   kubectl get ingress -n newdecade
   ```

2. Configura estos registros DNS:
   ```
   Tipo A:
   newdecadedevelop.com          → [IP del LoadBalancer]
   www.newdecadedevelop.com      → [IP del LoadBalancer]
   ```

### 8. Configuración de SSL/TLS

El SSL se configura automáticamente con Let's Encrypt cuando:

1. El dominio esté apuntando correctamente al LoadBalancer
2. Se aplique el ClusterIssuer:
   ```cmd
   set KUBECONFIG=C:\AllCentury\website-newdecade\k8s\k8s-new-decade-kubeconfig.yaml
   kubectl apply -f k8s\cluster-issuer.yaml
   ```

**Verificar certificado:**
```cmd
kubectl get certificate -n newdecade
kubectl describe certificate newdecade-production-tls -n newdecade
```

### 9. Comandos Útiles de Kubernetes

```cmd
# Configurar kubeconfig
set KUBECONFIG=C:\AllCentury\website-newdecade\k8s\k8s-new-decade-kubeconfig.yaml

# Ver pods
kubectl get pods -n newdecade

# Ver logs de un pod
kubectl logs -f deployment/newdecade-website -n newdecade

# Ver services
kubectl get svc -n newdecade

# Ver ingress
kubectl get ingress -n newdecade

# Verificar estado del deployment
kubectl rollout status deployment/newdecade-website -n newdecade

# Reiniciar pods (forzar re-deployment)
kubectl rollout restart deployment/newdecade-website -n newdecade

# Escalar replicas
kubectl scale deployment/newdecade-website --replicas=2 -n newdecade
```

### 10. Recursos del Deployment

**Por cada pod:**
- Memoria: 1Gi (request) - 2Gi (limit)
- CPU: 900m (request) - 1600m (limit)

**Health checks:**
- Liveness Probe: GET / cada 30s (después de 60s)
- Readiness Probe: GET / cada 10s (después de 20s)

### 11. Troubleshooting

**Los pods no inician:**
```bash
kubectl get pods -n newdecade
kubectl describe pod [POD_NAME] -n newdecade
kubectl logs [POD_NAME] -n newdecade
```

**El certificado SSL no se genera:**
```bash
kubectl get certificate -n newdecade
kubectl describe certificate newdecade-production-tls -n newdecade
kubectl get certificaterequest -n newdecade
```

**El sitio no carga:**
```bash
# Verificar que el LoadBalancer tenga IP externa
kubectl get svc -n newdecade

# Verificar ingress
kubectl describe ingress newdecade-website-ingress -n newdecade

# Verificar que los pods estén running
kubectl get pods -n newdecade
```

### 12. Próximos Pasos

1. ✅ Secrets de GitHub configurados
2. ✅ Dominio configurado en archivos
3. ✅ Archivo kubeconfig agregado al .gitignore
4. ⏳ Hacer push a GitHub (triggereará el primer deployment automático)
5. ⏳ Esperar a que GitHub Actions construya y suba la imagen
6. ⏳ Obtener IP del LoadBalancer: `kubectl get ingress -n newdecade`
7. ⏳ Configurar DNS apuntando al LoadBalancer
8. ⏳ Aplicar ClusterIssuer para SSL: `kubectl apply -f k8s\cluster-issuer.yaml`
9. ⏳ Verificar certificado SSL se genere correctamente

**IMPORTANTE:** Desde ahora, cada push a `main` desplegará automáticamente la nueva versión.

## Contacto

Para soporte adicional, contacta al equipo de DevOps.
