<script setup>
import Link from "@/components/Link.vue";
</script>

<template>
  <div>
    <Link to="products"> Volver </Link>

    <h1 class="text-4xl font-black my-10">Nuevo Producto</h1>

    <div class="flex justify-center bg-white shadow">
      <div class="my-10 p-10 w-full 2xl:w-2/4">
        <FormKit 
            type="form"
            submit-label="Agregar Producto"
        > 
            <FormKit 
                type="text"
                label="Nombre"
                name="name"
                placeholder="Nombre de producto"
                validation="required" 
                :validation-messages="{required: 'El nombre del producto es Obligatorio'}"           
            />

            <FormKit 
                type="file"
                label="Imagen Producto"
                name="image"
                validation="required" 
                :validation-messages="{required: 'La imagen del producto es obligatoria'}"  
                accept=".jpg"         
            />

            <FormKit 
                type="select"
                label="Categoria"
                name="category"
                validation="required" 
                :validation-messages="{required: 'La categoria es obligatoria'}"    
                :options="[1,2,3]"   
            />

            <FormKit 
                type="number"
                label="Precio"
                name="price"
                placeholder="precio de producto"
                validation="required" 
                :validation-messages="{required: 'El precio es obligatorio'}"  
                min="1"     
            />

            <FormKit 
                type="number"
                label="Disponible"
                name="availability"
                placeholder="Cantidad disponible"
                validation="required" 
                :validation-messages="{required: 'La cantidad es obligatoria'}"  
                min="1"
            />
        </FormKit>
      </div>
    </div>
  </div>
</template>
