class ProductManager {
    constructor() {
      this.products = [];
      this.autoIncrementId = 1;
    }
    addProduct({ title, description, price, thumbnail, code, stock }) {

      const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
      const inputFields = Object.keys({ title, description, price, thumbnail, code, stock });
  
      if (!requiredFields.every(field => inputFields.includes(field))) {
        console.error("Todos los campos son obligatorios");
        return;
      }
      if (this.products.some(product => product.code === code)) {
        console.error("Ya existe un producto con el mismo código");
        return;
      }
      const product = {
        id: this.autoIncrementId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      console.log("Producto agregado:", product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (!product) {
        console.error("Product Not Found");
      }
  
      return product;
    }
  }
  const productManager = new ProductManager();
  
  console.log("Productos al principio:", productManager.getProducts());
  
  productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
  
  console.log("Productos después de agregar uno:", productManager.getProducts());
  
  productManager.addProduct({
    title: "producto prueba2",
    description: "Este es un producto prueba2",
    price: 150,
    thumbnail: "Sin imagen2",
    code: "abc123",
    stock: 30,
  });
  
  const existingProduct = productManager.getProductById(1);
  console.log("Producto existente:", existingProduct);
  
  const nonExistingProduct = productManager.getProductById(999);
  