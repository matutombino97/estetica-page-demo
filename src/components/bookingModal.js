export function initBookingModal() {
    if (!document.getElementById('booking-modal')) {
        const modalHtml = `
        <div id="booking-modal" class="modal-overlay" style="display: none;">
            <div class="modal-content">
                <button class="modal-close" onclick="window.closeBookingModal()"><i class="fa-solid fa-xmark"></i></button>
                <h3 id="booking-title">Agendar Turno</h3>
                <p>SeleccionÃ¡ una fecha y el momento del dÃ­a que prefieras.</p>
                <form id="booking-form" onsubmit="window.submitBooking(event)">
                    <div class="form-group">
                        <label for="booking-date">DÃ­a</label>
                        <input type="date" id="booking-date" required min="${new Date().toISOString().split('T')[0]}" />
                    </div>
                    <div class="form-group">
                        <label for="booking-time">Horario preferido</label>
                        <select id="booking-time" required>
                            <option value="">Seleccionar horario...</option>
                            <option value="MaÃ±ana (9:00 - 13:00)">MaÃ±ana (9:00 - 13:00)</option>
                            <option value="Tarde (13:00 - 17:00)">Tarde (13:00 - 17:00)</option>
                            <option value="Noche (17:00 - 20:00)">Noche (17:00 - 20:00)</option>
                        </select>
                    </div>
                    <input type="hidden" id="booking-treatment" value="" />
                    <button type="submit" class="btn btn-gold" style="width: 100%; margin-top: 1rem;">
                        <i class="fa-brands fa-whatsapp"></i> Confirmar por WhatsApp
                    </button>
                </form>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        window.openBookingModal = (treatmentName) => {
            document.getElementById('booking-treatment').value = treatmentName;
            document.getElementById('booking-title').innerText = `Agendar: ${treatmentName}`;
            document.getElementById('booking-modal').style.display = 'flex';
        };

        window.closeBookingModal = () => {
            document.getElementById('booking-modal').style.display = 'none';
        };

        window.submitBooking = (e) => {
            e.preventDefault();
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            const treatment = document.getElementById('booking-treatment').value;
            
            // Format date to DD/MM/YYYY
            const dateParts = date.split('-');
            const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

            const text = `Hola! Quiero agendar un turno para *${treatment}*.\n\nðŸ“… Fecha: ${formattedDate}\nâ° Horario: ${time}\n\nÂ¿Tienen disponibilidad?`;
            const encodedText = encodeURIComponent(text);
            const waUrl = `https://wa.me/549261000000?text=${encodedText}`;
            
            window.closeBookingModal();
            window.open(waUrl, '_blank');
        };
    }
}
