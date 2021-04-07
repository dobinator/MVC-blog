
    const delButtonHandler = async(event) => {
        const post = window.location.toString().split ('/')[
            window.location.toString().split('/').length- 1
        ];
          const response = await fetch(`/api/projects/${post}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to delete post');
          }
        };

      document
    .querySelector('.')
    .addEventListener('click', delButtonHandler);
