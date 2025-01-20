import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { MapPin, Car, Phone } from "lucide-react";

const RecoveryForm = () => {
  const [location, setLocation] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location || !vehicleDetails || !contactNumber) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Recovery request submitted successfully!");
    // In a real app, this would send the data to a backend
  };

  return (
    <Card className="p-6 w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="w-4 h-4" />
            Your Location
          </label>
          <Input
            placeholder="Enter your current location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium">
            <Car className="w-4 h-4" />
            Vehicle Details
          </label>
          <Input
            placeholder="Car make, model and color"
            value={vehicleDetails}
            onChange={(e) => setVehicleDetails(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium">
            <Phone className="w-4 h-4" />
            Contact Number
          </label>
          <Input
            type="tel"
            placeholder="Your phone number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Request Recovery
        </Button>
      </form>
    </Card>
  );
};

export default RecoveryForm;