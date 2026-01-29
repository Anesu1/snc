import { FaWhatsapp } from 'react-icons/fa';
import Icon from '../../../components/ui/AppIcon';


const EmergencyContact = () => {
  return (
    <div className="bg-accent rounded-lg p-6 md:p-8 text-accent-foreground">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
          <Icon name="ExclamationTriangleIcon" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-headline font-bold mb-2">Need Urgent Assistance?</h3>
          <p className="text-sm opacity-90 mb-4 leading-relaxed">
            For emergency construction needs, structural issues, or urgent project consultations,
            contact our 24/7 emergency response team immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0202065845"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-accent rounded-lg font-headline font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Icon name="PhoneIcon" size={20} />
              <span>Call Emergency Line</span>
            </a>
            <a
              href="https://wa.me/+263771001750"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white bg-opacity-20 border-2 border-white rounded-lg font-headline font-semibold hover:bg-white hover:text-accent transition-all duration-300"
            >
              <FaWhatsapp />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;