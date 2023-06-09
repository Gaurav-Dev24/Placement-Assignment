    // Function to fetch blogs from the API
    function fetchBlogs() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayBlogs(data))
        .catch(error => console.log(error));
    }

    // Function to display blogs in the UI
    function displayBlogs(blogs) {
      const blogList = document.querySelector('.blog-list');
      blogList.innerHTML = '';

      blogs.forEach(blog => {
        const blogItem = document.createElement('li');
        blogItem.className = 'blog-item';
        blogItem.innerHTML = `
          <h2>${blog.title}</h2>
          <p>${blog.body}</p>
          <button class="delete-button form-btn" data-id="${blog.id}">Delete</button>
        `;
        blogList.appendChild(blogItem);
      });

      const deleteButtons = document.querySelectorAll('.delete-button');
      deleteButtons.forEach(button => {
        button.addEventListener('click', deleteBlog);
      });
    }

    // Function to handle blog submission
    function handleBlogSubmission(event) {
      event.preventDefault();

      const titleInput = document.getElementById('title');
      const bodyInput = document.getElementById('body');

      const title = titleInput.value.trim();
      const body = bodyInput.value.trim();

      if (title === '' || body === '') {
        showError('Please fill in all fields');
        return;
      }

      const newBlog = {
        title: title,
        body: body
      };

      addBlog(newBlog);
      titleInput.value = '';
      bodyInput.value = '';
    }

    // Function to add a new blog
    function addBlog(blog) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
      })
        .then(response => response.json())
        .then(data => {
          fetchBlogs(); // Refresh the blog list
        })
        .catch(error => console.log(error));
    }

    // Function to delete a blog
    function deleteBlog(event) {
      const blogId = event.target.dataset.id;

      fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            fetchBlogs(); // Refresh the blog list
          } else {
            showError('Failed to delete blog');
          }
        })
        .catch(error => console.log(error));
    }

    // Function to show error message
    function showError(message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;

      const form = document.querySelector('.add-blog-form');
      form.insertAdjacentElement('beforebegin', errorDiv);

      setTimeout(() => {
        errorDiv.remove();
      }, 3000);
    }

    // Fetch blogs on page load
    fetchBlogs();

    // Add event listener for blog submission
    const form = document.querySelector('.add-blog-form');
    form.addEventListener('submit', handleBlogSubmission);
 
