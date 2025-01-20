import { Card } from "@/components/ui/card";
import { Phone, AlertCircle } from "lucide-react";

const EmergencyContacts = () => {
  return (
    <Card className="p-4 bg-red-50 border-l-4 border-red-500">
      <div className="flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-red-500" />
        <div>
          <h3 className="font-medium">Emergency Contacts</h3>
          <div className="flex items-center gap-2 mt-1">
            <Phone className="w-4 h-4 text-red-500" />
            <a href="tel:911" className="text-red-500 font-medium">
              911
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EmergencyContacts;