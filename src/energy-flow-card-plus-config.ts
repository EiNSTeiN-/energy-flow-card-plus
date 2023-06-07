import { LovelaceCardConfig } from 'custom-card-helpers';
import { ComboEntity, IndividualDeviceType, SecondaryInfoType, baseConfigEntity, gridPowerOutage } from './types';

interface mainConfigOptions {
  dashboard_link?: string;
  dashboard_link_label?: string;
  inverted_entities?: string | string[];
  kwh_decimals?: number;
  min_flow_rate?: number;
  max_flow_rate?: number;
  wh_decimals?: number;
  wh_kwh_threshold?: number;
  clickable_entities?: boolean;
  max_expected_energy?: number;
  min_expected_energy?: number;
  display_zero_lines?: boolean;
  energy_date_selection?: boolean;
  use_new_flow_rate_model?: boolean;
}

export interface EntitiesConfig {
  battery?: baseConfigEntity & {
    entity?: {
      consumption?: string;
      production?: string;
    };
    state_of_charge?: string;
    state_of_charge_unit?: string;
    state_of_charge_unit_white_space?: boolean;
    state_of_charge_decimals?: number;
    color_state_of_charge_value?: boolean | 'production' | 'consumption';
    color_circle?: boolean | 'production' | 'consumption';
    color?: ComboEntity;
  };
  grid?: baseConfigEntity & {
    entity?: {
      consumption?: string;
      production?: string;
    };
    power_outage?: gridPowerOutage;
    secondary_info?: SecondaryInfoType;
    color_circle?: boolean | 'production' | 'consumption';
    color?: ComboEntity;
  };
  solar?: baseConfigEntity & {
    entity: string;
    color?: string | number[];
    color_icon?: boolean;
    color_value?: boolean;
    color_label?: boolean;
    secondary_info?: SecondaryInfoType;
    display_zero_state?: boolean;
  };
  home?: baseConfigEntity & {
    entity: string;
    override_state?: boolean;
    color_icon?: boolean | 'solar' | 'grid' | 'battery';
    color_value?: boolean | 'solar' | 'grid' | 'battery';
    subtract_individual?: boolean;
    secondary_info?: SecondaryInfoType;
  };
  fossil_fuel_percentage?: baseConfigEntity & {
    entity?: string;
    show?: boolean;
    color?: string;
    state_type?: 'percentage' | 'energy';
    color_icon?: boolean;
    display_zero?: boolean;
    display_zero_state?: boolean;
    display_zero_tolerance?: number;
    color_value?: boolean;
    color_label?: boolean;
    unit_white_space?: boolean;
    decimals?: number;
    calculate_flow_rate?: boolean | number;
    seconday_info: SecondaryInfoType;
  };
  individual1?: IndividualDeviceType;
  individual2?: IndividualDeviceType;
}
export interface EnergyFlowCardPlusConfig extends LovelaceCardConfig, mainConfigOptions {
  entities: EntitiesConfig;
}
