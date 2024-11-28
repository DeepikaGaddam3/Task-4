document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'Laptop', category: 'electronics', price: 1000, rating: 4.8, image: 'laptop.jpg', description: 'High performance laptop' },
        { name: 'Shirt', category: 'clothing', price: 200, rating: 4.6, image: 'shirt.jpg', description: 'Comfortable cotton shirt' },
        { name: 'Book', category: 'books', price: 100, rating: 4.0, image: 'book.jpg', description: 'Interesting novel' },
        { name: 'Smartphone', category: 'electronics', price: 600, rating: 4.7, image: 'smartphone.jpg', description: 'Latest model smartphone' },
        { name: 'Jacket', category: 'clothing', price: 250, rating: 4.3, image: 'jacket.jpg', description: 'Stylish leather jacket' },
        { name: 'Novel', category: 'books', price: 15, rating: 4.9, image: 'novel.jpg', description: 'Bestselling novel' },
        { name: 'Smartwatch', category: 'electronics', price: 800, rating: 4.7, image: 'smartwatch.jpg', description: 'Latest model smartwatch' },
        { name: 'Hoodie', category: 'clothing', price: 50, rating: 4.6, image: 'hoodie.jpg', description: 'Stylish and comfortable hoodie' },
        { name: 'Bluetooth Earbuds', category: 'electronics', price: 800, rating: 4.7, image: 'bluetooth.jpg', description: 'Latest model earpods' },
        { name: 'Neckpiece', category: 'jewellery', price: 150, rating: 4.9, image: 'jewellery1.jpg', description: 'Modern neckpiece' },
        { name: 'Bangles', category: 'jewellery', price: 350, rating: 4.8, image: 'jewellery3.jpg', description: 'Modern bangles' },
        { name: 'Jewellery Set', category: 'jewellery', price: 300, rating: 4.7, image: 'jewellery2.jpg', description: 'Latest model jewellery set' },
    ];

    const filters = {
        search: '',
        category: 'all',
        price: 'all',
        rating: 'all',
    };

    const filterProducts = () => {
        let filteredProducts = products;

        if (filters.search) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                product.description.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        if (filters.category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === filters.category);
        }

        if (filters.price !== 'all') {
            if (filters.price === 'low') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (filters.price === 'high') {
                filteredProducts.sort((a, b) => b.price - a.price);
            }
        }

        if (filters.rating !== 'all') {
            if (filters.rating === 'high') {
                filteredProducts.sort((a, b) => b.rating - a.rating);
            } else if (filters.rating === 'low') {
                filteredProducts.sort((a, b) => a.rating - b.rating);
            }
        }

        displayProducts(filteredProducts);
    };

    const displayProducts = (products) => {
        const productsContainer = document.getElementById('products');
        productsContainer.innerHTML = '';
        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating}</p>
            `;
            productsContainer.appendChild(productDiv);
        });
    };

    document.getElementById('search').addEventListener('input', (e) => {
        filters.search = e.target.value;
        filterProducts();
    });

    document.getElementById('category').addEventListener('change', (e) => {
        filters.category = e.target.value;
        filterProducts();
    });

    document.getElementById('price').addEventListener('change', (e) => {
        filters.price = e.target.value;
        filterProducts();
    });

    document.getElementById('rating').addEventListener('change', (e) => {
        filters.rating = e.target.value;
        filterProducts();
    });

    filterProducts();
});
