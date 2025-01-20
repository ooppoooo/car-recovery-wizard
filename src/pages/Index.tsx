import RecoveryForm from "@/components/RecoveryForm";
import ServiceStatus from "@/components/ServiceStatus";
import EmergencyContacts from "@/components/EmergencyContacts";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">
          Car Recovery Service
        </h1>
        
        <EmergencyContacts />
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <RecoveryForm />
          </div>
          <div className="space-y-6">
            <ServiceStatus />
            <Card className="p-4">
              <h2 className="font-medium mb-2">Available Services</h2>
              <ul className="space-y-2 text-sm">
                <li>✓ 24/7 Emergency Towing</li>
                <li>✓ Breakdown Recovery</li>
                <li>✓ Flat Tire Change</li>
                <li>✓ Battery Jump Start</li>
                <li>✓ Fuel Delivery</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;