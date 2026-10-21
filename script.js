document.addEventListener('DOMContentLoaded', () => {
    // Inicializar íconos de Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // Elementos de la calculadora
    const qtyInput = document.getElementById('quantity');
    const btnPlus = document.getElementById('btn-plus');
    const btnMinus = document.getElementById('btn-minus');
    const summaryQty = document.getElementById('summary-qty');
    const presetBtns = document.querySelectorAll('.preset-btn');
    const btnSendWhatsapp = document.getElementById('btn-send-whatsapp');

    // Número de teléfono de Anali Huertas
    const whatsappPhone = '51975648716';

    // Actualizar resumen del pedido
    function updateSummary() {
        let val = parseInt(qtyInput.value) || 5;
        if (val < 1) val = 1;
        qtyInput.value = val;
        summaryQty.textContent = `${val} Unidad${val > 1 ? 'es' : ''}`;
    }

    // Botones + y -
    btnPlus.addEventListener('click', () => {
        qtyInput.value = parseInt(qtyInput.value || 0) + 5;
        updateSummary();
    });

    btnMinus.addEventListener('click', () => {
        const current = parseInt(qtyInput.value || 0);
        if (current > 5) {
            qtyInput.value = current - 5;
            updateSummary();
        }
    });

    qtyInput.addEventListener('input', updateSummary);

    // Botones Rápidos (Presets)
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            qtyInput.value = btn.getAttribute('data-qty');
            updateSummary();
        });
    });

    // Enviar pedido por WhatsApp
    btnSendWhatsapp.addEventListener('click', () => {
        const qty = qtyInput.value;
        const message = `Hola Anali Huertas, me comunico desde la página web Casa del Agua. Deseo cotizar un pedido por mayor de ${qty} unidades de Agua Benedyt de 10 Litros. ¿Me podrías brindar los precios y disponibilidad por favor?`;
        
        const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});