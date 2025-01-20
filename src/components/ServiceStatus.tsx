import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const ServiceStatus = () => {
  return (
    <Card className="p-4 bg-secondary/10 border-l-4 border-secondary">
      <div className="flex items-center gap-3">
        <Clock className="w-5 h-5 text-secondary" />
        <div>
          <h3 className="font-medium">Service Status</h3>
          <p className="text-sm text-gray-600">Estimated arrival: 15-20 minutes</p>
        </div>
      </div>
    </Card>
  );
};

export default ServiceStatus;