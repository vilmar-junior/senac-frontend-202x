
# Criando um Componente Angular com Google Maps

Este tutorial irá guiá-lo passo a passo para integrar o Google Maps em um componente Angular utilizando a biblioteca `@angular/google-maps`. Você aprenderá como adicionar um mapa interativo, configurar a API do Google Maps e trabalhar com a geolocalização.

## Passo 1: Instalar a Biblioteca do Google Maps

Instale a biblioteca `@angular/google-maps`:

```bash
ng add @angular/google-maps
```

## Passo 2: Obter a Chave da API do Google Maps

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto ou utilize um existente.
3. Habilite a API do Google Maps JavaScript.
4. Gere uma chave de API.
5. Lembre-se de restringir a chave para evitar abusos.

## Passo 3: Configurar a Chave da API no `index.html`

Abra o arquivo `src/index.html` e adicione a chave da API do Google Maps na tag `<head>`:

```html
<!-- Adicionar a chave da API do Google Maps -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_API&libraries=places"></script>
```

Substitua `SUA_CHAVE_API` pela chave que você obteve no passo anterior.

## Passo 4: Criar o Componente de Mapa

Crie um novo módulo e componente para o mapa: ver o diretório /src/app/mapa/*

No arquivo `mapa.component.html`, adicione o componente do Google Maps e o botão para salvar a localização:

```html
<div class="map-container">
  <google-map 
    [center]="center"
    [zoom]="zoom"
    (mapClick)="onMapClick($event)">
    <map-marker 
      [position]="markerPosition"
      label="Localização Atual">
    </map-marker>
  </google-map>
  <button (click)="salvarLocalizacao()" class="btn btn-primary">Salvar Localização Atual</button>
</div>
```

### Estilização no `mapa.component.scss`

Adicione um pouco de CSS para garantir que o mapa ocupe toda a tela:

```scss
.map-container {
  height: 100vh; /* Ocupa toda a altura da tela */
  width: 100%;   /* Ocupa toda a largura da tela */
}
```

## Passo 5: Configurar o Módulo de Roteamento

Adicione uma rota para o componente `MapaComponent`. Abra o arquivo `src/app/app-routing.module.ts` e configure a rota para o mapa:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';

const routes: Routes = [
  { path: 'mapa', component: MapaComponent },
  { path: '', redirectTo: '/mapa', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Armazenando Coordenadas no Backend (Spring Boot)

#### 1. Entidade `Localizacao` (Java)

```java
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Localizacao {

    @Id
    private Long id;

    private Double latitude;
    private Double longitude;

    // Construtores, Getters e Setters
    public Localizacao() {}

    public Localizacao(Double latitude, Double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
```

#### 2. Script SQL para a Tabela `LOCALIZACAO`

```sql
CREATE TABLE LOCALIZACAO (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL
);
```

---
**Documentação oficial do Google Maps**: [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
