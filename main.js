<script>
        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                    
                    // Scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // File upload display
        const fileUpload = document.getElementById('file-upload');
        if (fileUpload) {
            fileUpload.addEventListener('change', function() {
                const files = this.files;
                if (files.length > 0) {
                    const uploadArea = this.parentElement;
                    uploadArea.innerHTML = `
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <i class="fas fa-check-circle text-3xl text-green-400 mb-3"></i>
                            <p class="mb-2 text-sm text-gray-400">${files.length} file(s) selected</p>
                            <p class="text-xs text-gray-500">Click to change files</p>
                        </div>
                    `;
                }
            });
        }
    </script>