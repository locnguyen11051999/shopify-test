document.addEventListener('DOMContentLoaded', function() {
    const btn_expands = document.querySelectorAll('.btn-expand');
    const btn_collapses = document.querySelectorAll('.btn-collapse');

    btn_expands.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.add('text-expand');
            parent.classList.remove('text-collapse');
        });
    });

    btn_collapses.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.add('text-collapse');
            parent.classList.remove('text-expand');
        });
    });
});