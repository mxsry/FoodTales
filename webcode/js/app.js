document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.forum-search');
    const searchInput = document.querySelector('.forum-input');
    const forumCards = document.querySelectorAll('.forum-card');

    if (!searchForm || !searchInput) return;
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchInput.value.toLowerCase().trim();
        filterPosts(query);
    });

    function filterPosts(query) {
        forumCards.forEach(card => {
            const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
            const text = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
            const matches = title.includes(query) || text.includes(query);
            card.parentElement.style.display = matches ? '' : 'none';
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const postBtn = document.getElementById('postBtn');

    postBtn.addEventListener('click', function() {
        alert('This will let user post their thought, and submit to the "Forum" page later on!');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cancelBtn = document.getElementById('cancelBtn');

    cancelBtn.addEventListener('click', function() {
        window.location.href = 'home.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.otherBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('This feature will let user interact with post/upload/... later on!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.unfinishedPost').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('This post have not been completed, you can check other posts in "Forum" page for my demo page!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.filterBtn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('This will let user filter by "Tags", more will be explain in the report!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.page-link').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('This will navigate to next page to display more posts!');
        });
    });
});
