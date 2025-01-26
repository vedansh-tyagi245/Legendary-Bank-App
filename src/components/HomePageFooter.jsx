import React from 'react';

function HomePageFooter() {
    const footerStyles = {
        backgroundColor: 'transparent', // Dark background
        color: '#f0f0f0', // Brighter white text
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px',
        borderColor: 'rgba(255, 255, 255, 0.1)',
    };

    const socialLinksContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '10px',
    };

    const socialIconStyles = {
        color: '#fff',
        fontSize: '24px',
        textDecoration: 'none',
        transition: 'color 0.3s',
    };

    const socialIconHoverStyles = {
        color: '#00acee', // Change this to your desired hover color
    };

    return (
        <div style={footerStyles} className="border-t-2">
            <div>Follow us on</div>
            <div style={socialLinksContainerStyles}>
                {/* Facebook Link */}
                <a
                    href="https://facebook.com"
                    style={socialIconStyles}
                    onMouseOver={(e) => (e.target.style.color = socialIconHoverStyles.color)}
                    onMouseOut={(e) => (e.target.style.color = socialIconStyles.color)}
                >
                    <i className="fab fa-facebook-f"></i>
                </a>

                {/* Instagram Link */}
                <a
                    href="https://instagram.com"
                    style={socialIconStyles}
                    onMouseOver={(e) => (e.target.style.color = socialIconHoverStyles.color)}
                    onMouseOut={(e) => (e.target.style.color = socialIconStyles.color)}
                >
                    <i className="fab fa-instagram"></i>
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://linkedin.com"
                    style={socialIconStyles}
                    onMouseOver={(e) => (e.target.style.color = socialIconHoverStyles.color)}
                    onMouseOut={(e) => (e.target.style.color = socialIconStyles.color)}
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>

            <div style={{ marginTop: '20px', fontSize: '14px' }}>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </div>
    );
}

export default HomePageFooter;
