import Warhouse from "./images/warehouse.png";
import cargo from "./images/cargo.png";
import handling from "./images/handling.png";
import supplyChain from "./images/supply-chain.png";
import sCargo from "./images/s-cargo.png";
import doorstep from "./images/doorstep.png";
import chatering from "./images/chatering.png";
import movements from "./images/movements.png";

export const services = [
  {
    id: "road-transport",
    title: "Road Transportation",
    short: "Reliable movement of cargo across cities, states and industrial corridors.",
    description: "End-to-end road transportation for commercial cargo with route planning, vehicle coordination and delivery visibility.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    icon: "Truck",
    points: ["Full truckload movement", "Part-load & scheduled dispatch", "Route planning", "Delivery coordination"],
    detailHeading: "Road transportation built around dependable delivery",
    detailText: "Our road transportation service is designed for businesses that need cargo to move safely and predictably between suppliers, warehouses, distribution points and customers. We coordinate the practical details around vehicle planning, dispatch, route movement and delivery handover.",
    whyPoints: ["Flexible vehicle and load planning", "Route-focused movement coordination", "Clear dispatch and delivery communication", "Support for regular and project-based movements"]
  },
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    short: "Coordinated air, sea and multimodal freight solutions.",
    description: "We coordinate freight movement across modes and partners so your shipment can move smoothly from origin to destination.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=85",
    icon: "Ship",
    points: ["Air freight coordination", "Sea freight coordination", "Multimodal planning", "Shipment documentation"],
    detailHeading: "Freight forwarding with a connected view of your shipment",
    detailText: "Our freight forwarding support connects shipment planning, carrier coordination and documentation into one practical workflow. Whether the requirement is air, sea or multimodal movement, we focus on keeping every handover organized from origin to destination.",
    whyPoints: ["Air and sea freight coordination", "Multimodal movement planning", "Shipment documentation support", "Origin-to-destination coordination"]
  },
  {
    id: "warehousing",
    title: "Warehousing",
    short: "Secure storage and organized handling for your inventory.",
    description: "Flexible warehousing support designed around safe storage, organized inventory handling and efficient dispatch.",
    image: Warhouse,
    icon: "Warehouse",
    points: ["Storage management", "Inbound & outbound handling", "Inventory coordination", "Dispatch support"],
    detailHeading: "Warehousing that keeps inventory moving",
    detailText: "Efficient warehousing is more than storage. Our support is built around organized receiving, safe handling, inventory coordination and timely dispatch so goods can move into the next stage without unnecessary friction.",
    whyPoints: ["Organized inbound and outbound flow", "Inventory handling coordination", "Safe cargo storage practices", "Dispatch-ready operations"]
  },
  {
    id: "customs-clearance",
    title: "Customs Clearance",
    short: "Documentation and coordination support for smoother cargo clearance.",
    description: "Practical customs coordination and documentation support to reduce avoidable delays during import and export movements.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    icon: "FileCheck2",
    points: ["Document coordination", "Import support", "Export support", "Clearance follow-up"],
    detailHeading: "Clearer customs coordination for international cargo",
    detailText: "Customs processes require accurate documentation and close coordination. Our customs clearance support helps organize the documentation and follow-up required for import and export shipments while keeping customers informed about the movement.",
    whyPoints: ["Import and export coordination", "Documentation follow-up", "Clearance process support", "Communication around shipment status"]
  },
  {
    id: "road-transport",
    title: "Road Transportation",
    short: "Reliable movement of cargo across cities, states and industrial corridors.",
    description: "End-to-end road transportation for commercial cargo with route planning, vehicle coordination and delivery visibility.",
    image: chatering ,
    icon: "Truck",
    points: ["Full truckload movement", "Part-load & scheduled dispatch", "Route planning", "Delivery coordination"],
    detailHeading: "Road transportation built around dependable delivery",
    detailText: "Our road transportation service is designed for businesses that need cargo to move safely and predictably between suppliers, warehouses, distribution points and customers. We coordinate the practical details around vehicle planning, dispatch, route movement and delivery handover.",
    whyPoints: ["Flexible vehicle and load planning", "Route-focused movement coordination", "Clear dispatch and delivery communication", "Support for regular and project-based movements"]
  },
  {
    id: "project-cargo",
    title: "Project Cargo",
    short: "Specialized logistics planning for oversized and complex consignments.",
    description: "Project cargo planning for heavy, oversized or time-sensitive movements where route, equipment and coordination matter.",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1200&q=85",
    icon: "Boxes",
    points: ["Heavy cargo planning", "Special equipment coordination", "Route assessment", "Site delivery coordination"],
    detailHeading: "Project cargo planned around the complexity of the move",
    detailText: "Large and specialized consignments need more than a standard transport booking. We coordinate the planning, route considerations, equipment requirements and site delivery details that help project cargo move in a controlled way.",
    whyPoints: ["Oversized and heavy cargo planning", "Equipment and vehicle coordination", "Route and site considerations", "Delivery-stage coordination"]
  },
  {
    id: "last-mile",
    title: "Last-Mile Delivery",
    short: "Dependable final-leg delivery from hub to customer or site.",
    description: "Structured last-mile delivery support for businesses that need predictable handover and clear communication.",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=85",
    icon: "MapPinned",
    points: ["Doorstep delivery", "Business deliveries", "Scheduled drops", "Proof-of-delivery coordination"],
    detailHeading: "Last-mile delivery that completes the logistics journey",
    detailText: "The final handover is where a logistics journey becomes a customer experience. Our last-mile support focuses on scheduled delivery, practical coordination and clear communication between dispatch teams and the final destination.",
    whyPoints: ["Scheduled final-leg delivery", "Business and customer drop-offs", "Delivery coordination", "Handover and proof-of-delivery support"]
  },
  {
    id: "distribution",
    title: "Distribution Management",
    short: "Planned movement of goods across multiple destinations.",
    description: "Distribution coordination that connects suppliers, hubs and delivery points through an organized movement plan.",
    image: cargo,
    icon: "Route",
    points: ["Multi-location distribution", "Dispatch planning", "Hub coordination", "Delivery scheduling"],
    detailHeading: "Distribution management for connected delivery networks",
    detailText: "When cargo needs to reach several destinations, consistent planning becomes essential. We support distribution operations through dispatch planning, hub coordination, route scheduling and destination-wise delivery management.",
    whyPoints: ["Multi-destination planning", "Dispatch and hub coordination", "Delivery scheduling", "Operational visibility across movements"]
  },
  {
    id: "packing-handling",
    title: "Packing & Cargo Handling",
    short: "Careful preparation and handling before your shipment moves.",
    description: "Cargo preparation and handling support focused on safer movement, organized loading and practical shipment readiness.",
    image: handling,
    icon: "PackageCheck",
    points: ["Cargo preparation", "Loading coordination", "Handling supervision", "Shipment readiness"],
    detailHeading: "Careful packing and cargo handling before every movement",
    detailText: "Proper preparation can make a major difference to the safety and efficiency of a shipment. Our packing and handling support helps get cargo ready for movement with organized loading and practical handling coordination.",
    whyPoints: ["Shipment preparation support", "Loading and unloading coordination", "Handling supervision", "Cargo readiness before dispatch"]
  },
  {
    id: "supply-chain",
    title: "Supply Chain Support",
    short: "Connected logistics support for day-to-day supply chain operations.",
    description: "Flexible logistics support for businesses looking to simplify procurement-to-delivery movement and coordination.",
    image: supplyChain,
    icon: "Network",
    points: ["Movement planning", "Supplier coordination", "Logistics scheduling", "Operational support"],
    detailHeading: "Supply-chain support that connects the moving parts",
    detailText: "A smooth supply chain depends on coordination between suppliers, storage points, transport and delivery. Our logistics support helps businesses organize these movements and keep day-to-day operations connected.",
    whyPoints: ["Supplier and movement coordination", "Logistics scheduling", "Operational planning", "Support across recurring movements"]
  },
  {
    id: "cold-chain",
    title: "Specialized Cargo",
    short: "Coordinated transport for cargo requiring additional care.",
    description: "Specialized movement planning for cargo that needs additional handling, timing or transport considerations.",
    image: sCargo ,
    icon: "ThermometerSnowflake",
    points: ["Special handling", "Time-sensitive movement", "Equipment coordination", "Delivery monitoring"],
    detailHeading: "Specialized cargo movement with additional care",
    detailText: "Some shipments need extra attention because of their handling requirements, timing or operational sensitivity. We coordinate specialized movement around the cargo characteristics and delivery requirements.",
    whyPoints: ["Cargo-specific handling planning", "Time-sensitive movement coordination", "Special equipment support", "Delivery-stage monitoring"]
  },
  {
    id: "reverse-logistics",
    title: "Reverse Logistics",
    short: "Organized return movement from destination back to the required point.",
    description: "Return logistics support for rejected, exchanged, reusable or service-related cargo.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    icon: "RefreshCw",
    points: ["Return pickup", "Exchange movement", "Reverse distribution", "Return coordination"],
    detailHeading: "Reverse logistics for organized return movements",
    detailText: "Returns, exchanges and service-related movements need a clear reverse flow. We coordinate the pickup and movement of returned goods so businesses can manage the journey back to a warehouse, supplier or service point.",
    whyPoints: ["Return pickup coordination", "Exchange and replacement movements", "Reverse distribution planning", "Return status communication"]
  },
  {
    id: "door-to-door",
    title: "Door-to-Door Logistics",
    short: "One coordinated journey from pickup point to final destination.",
    description: "A single logistics flow covering pickup, movement, coordination and final delivery for a simpler customer experience.",
    image: doorstep ,
    icon: "House",
    points: ["Pickup coordination", "Transit planning", "Delivery scheduling", "Single-point communication"],
    detailHeading: "Door-to-door logistics from pickup to final handover",
    detailText: "Door-to-door service simplifies the logistics journey by bringing pickup, transit coordination and final delivery together. It is designed for customers who prefer one coordinated flow instead of managing multiple logistics stages separately.",
    whyPoints: ["Pickup-to-delivery coordination", "Transit and route planning", "Scheduled final delivery", "Single-point communication"]
  }
];


export const heroSlides = [
  {
    title: "Integrated Logistics Solutions",
    subtitle: "Reliable movement. Clear coordination. Every destination.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2200&q=90"
  },
  {
    title: "Freight Forwarding",
    subtitle: "Connecting air, sea and road freight with practical planning.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=2200&q=90"
  },
  {
    title: "Road Transportation",
    subtitle: "Dependable cargo movement across routes and regions.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=90"
  },
  {
    title: "Warehousing & Distribution",
    subtitle: "Organized storage, handling and delivery support.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2200&q=90"
  }
];

export const gallery = [
  {
    title: "Fleet Operations",
    category: "Transport",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Cargo Movement",
    category: "Logistics",
    image: movements 
  },
  {
    title: "Warehouse Handling",
    category: "Warehousing",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Port & Freight Coordination",
    category: "Freight",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "On-Road Delivery",
    category: "Distribution",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Project Cargo",
    category: "Specialized",
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1400&q=85"
  }
];