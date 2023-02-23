fn main() {
    let builder = new_intervention_builder();
    let sniper = builder
        .with_heartbeat_sensor()
        .with_suppressor()
        .with_ACOG()
        .with_extended_magazine()
        .with_bipod()
        .build();
    println!("{:#?}", sniper)
}

pub trait FireArm {
    fn fire();
}

trait FireArmBuilder {
    fn build() -> FireArm;
}

#[derive(Debug)]
enum Grip {
    None,
    Vertical,
    Angled,
    Bipod,
}

#[derive(Debug)]
enum Scope {
    IronSight,
    ACOG,
    Thermal,
    Variable,
    VariableThermalScope,
}

#[derive(Debug)]
enum BarrelAttachement {
    None,
    Suppressor,
    FlashHider,
    MuzzleBrake,
    ExtendedBarrel,
}

#[derive(Debug)]
enum Magazine {
    DefaultMagazine,
    FastMagazine,
    ExtendedMagazine,
}

#[derive(Debug)]
struct AR15 {
    scope: Scope,
    grip: Grip,
    magazine: Magazine,
    barrel_attachement: BarrelAttachement,
    has_fmj: bool,
    has_heartbeat_sensor: bool,
}

fn new(builder: InterventionBuilder) -> AR15 {
    let mut intervention = AR15 {
        has_fmj: builder.has_fmj,
        has_heartbeat_sensor: builder.has_heartbeat_sensor,
        barrel_attachement: BarrelAttachement::None,
        grip: Grip::None,
        magazine: Magazine::DefaultMagazine,
        scope: Scope::IronSight,
    };

    match builder.scope {
        Some(v) => {
            intervention.scope = v;
        }
        None => {}
    };

    match builder.barrel_attachement {
        Some(v) => {
            intervention.barrel_attachement = v;
        }
        None => {}
    };

    match builder.grip {
        Some(v) => {
            intervention.grip = v;
        }
        None => {}
    };

    match builder.magazine {
        Some(v) => {
            intervention.magazine = v;
        }
        None => {}
    };

    intervention
}

struct InterventionBuilder {
    scope: Option<Scope>,
    grip: Option<Grip>,
    magazine: Option<Magazine>,
    barrel_attachement: Option<BarrelAttachement>,
    has_fmj: bool,
    has_heartbeat_sensor: bool,
}

fn new_intervention_builder() -> InterventionBuilder {
    return InterventionBuilder {
        scope: None,
        grip: None,
        magazine: None,
        barrel_attachement: None,
        has_fmj: false,
        has_heartbeat_sensor: false,
    };
}

impl InterventionBuilder {
    fn with_fmj(mut self) -> InterventionBuilder {
        self.has_fmj = true;
        self
    }

    fn with_heartbeat_sensor(mut self) -> InterventionBuilder {
        self.has_heartbeat_sensor = true;
        self
    }

    fn with_extended_magazine(mut self) -> InterventionBuilder {
        self.magazine = Some(Magazine::ExtendedMagazine);
        return self;
    }

    fn with_fast_magazine(mut self) -> InterventionBuilder {
        self.magazine = Some(Magazine::FastMagazine);
        return self;
    }

    fn with_vertical_grip(mut self) -> InterventionBuilder {
        self.grip = Some(Grip::Vertical);
        self
    }

    fn with_angeled_grip(mut self) -> InterventionBuilder {
        self.grip = Some(Grip::Angled);
        self
    }

    fn with_bipod(mut self) -> InterventionBuilder {
        self.grip = Some(Grip::Bipod);
        self
    }

    fn with_thermal_scope(mut self) -> InterventionBuilder {
        self.scope = Some(Scope::Thermal);
        self
    }

    fn with_ACOG(mut self) -> InterventionBuilder {
        self.scope = Some(Scope::ACOG);
        self
    }

    fn with_variable_scope(mut self) -> InterventionBuilder {
        self.scope = Some(Scope::Variable);
        self
    }

    fn with_variable_and_thermal_scope(mut self) -> InterventionBuilder {
        self.scope = Some(Scope::VariableThermalScope);
        self
    }

    fn with_suppressor(mut self) -> InterventionBuilder {
        self.barrel_attachement = Some(BarrelAttachement::Suppressor);
        self
    }

    fn with_muzzle_brake(mut self) -> InterventionBuilder {
        self.barrel_attachement = Some(BarrelAttachement::MuzzleBrake);
        self
    }

    fn with_flash_hider(mut self) -> InterventionBuilder {
        self.barrel_attachement = Some(BarrelAttachement::FlashHider);
        self
    }

    fn with_extended_barrel(mut self) -> InterventionBuilder {
        self.barrel_attachement = Some(BarrelAttachement::ExtendedBarrel);
        self
    }

    fn build(self) -> AR15 {
        new(self)
    }
}
