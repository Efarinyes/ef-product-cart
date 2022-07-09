# EF-Product-Card
Paquet de proves per a desplegar a NPM

### Eduard Farinyes

## Exemple
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ef-product-cart'
```

```
<ProductCard
    
    product={product}
        
    initialValues={{
        count: 3,
        maxCount: 10
    }}
>
    {
        ( {reset, count, incressBy, maxCount, isMaxCountReached } ) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
        )
    }
</ProductCard>
```