function showDetails(topic) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    // Update modal content based on the selected topic
    switch (topic) {
        case 'encryption':
            modalTitle.innerText = 'Encryption';
            modalContent.innerText = 'Encryption is the process of converting data into a secure format to prevent unauthorized access. It plays a crucial role in ensuring data confidentiality.';
            break;
        case 'firewalls':
            modalTitle.innerText = 'Firewalls';
            modalContent.innerText = 'Firewalls act as a barrier between a trusted internal network and untrusted external networks, monitoring and controlling incoming and outgoing network traffic based on predetermined security rules.';
            break;
        case 'authentication':
            modalTitle.innerText = 'Authentication';
            modalContent.innerText = 'Authentication is the process of verifying the identity of a user, system, or device. Common authentication methods include passwords, biometrics, and two-factor authentication.';
            break;
        case 'cyberthreats':
            modalTitle.innerText = 'Cyber Threats';
            modalContent.innerText = 'Cyber threats refer to malicious activities that aim to compromise the security of digital systems, networks, and data. Examples include malware, phishing, and ransomware attacks.';
            break;
        default:
            modalTitle.innerText = 'Topic Title';
            modalContent.innerText = 'Topic details will be displayed here.';
    }

    modal.style.display = 'block';
}

function closeDetails() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}
