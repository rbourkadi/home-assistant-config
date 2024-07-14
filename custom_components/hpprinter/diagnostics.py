"""Diagnostics support for Tuya."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import device_registry as dr, entity_registry as er
from homeassistant.helpers.device_registry import DeviceEntry

from .common.consts import DOMAIN
<<<<<<< HEAD
from .managers.ha_coordinator import HACoordinator
=======
>>>>>>> 752dd55 (Latest changes)

_LOGGER = logging.getLogger(__name__)


async def async_get_config_entry_diagnostics(
    hass: HomeAssistant, entry: ConfigEntry
) -> dict[str, Any]:
    """Return diagnostics for a config entry."""
    _LOGGER.debug("Starting diagnostic tool")

<<<<<<< HEAD
    return await _async_get_diagnostics(hass, entry)
=======
    return _async_get_diagnostics(hass, entry)
>>>>>>> 752dd55 (Latest changes)


async def async_get_device_diagnostics(
    hass: HomeAssistant, entry: ConfigEntry, device: DeviceEntry
) -> dict[str, Any]:
    """Return diagnostics for a device entry."""
<<<<<<< HEAD
    return await _async_get_diagnostics(hass, entry, device)


async def _async_get_diagnostics(
    hass: HomeAssistant,
    entry: ConfigEntry,
    _device: DeviceEntry | None = None,
=======
    return _async_get_diagnostics(hass, entry, device)


@callback
def _async_get_diagnostics(
    hass: HomeAssistant,
    entry: ConfigEntry,
    device: DeviceEntry | None = None,
>>>>>>> 752dd55 (Latest changes)
) -> dict[str, Any]:
    """Return diagnostics for a config entry."""
    _LOGGER.debug("Getting diagnostic information")

<<<<<<< HEAD
    coordinator: HACoordinator = hass.data[DOMAIN][entry.entry_id]
=======
    coordinator = hass.data[DOMAIN][entry.entry_id]

    debug_data = coordinator.get_debug_data()
>>>>>>> 752dd55 (Latest changes)

    data = {
        "disabled_by": entry.disabled_by,
        "disabled_polling": entry.pref_disable_polling,
<<<<<<< HEAD
        "debug": await coordinator.get_debug_data(),
    }

=======
        "debug_data": debug_data,
    }

    devices = coordinator.get_devices()

    if device:
        current_device_key = [
            device_key
            for device_key in devices
            if coordinator.get_device(device_key).get("identifiers")
            == device.identifiers
        ][0]

        device_data = coordinator.get_device_data(current_device_key)

        data |= _async_device_as_dict(
            hass,
            device.identifiers,
            device_data,
        )

    else:
        _LOGGER.debug("Getting diagnostic information for all devices")

        data.update(
            devices=[
                _async_device_as_dict(
                    hass,
                    coordinator.get_device(device_key).get("identifiers"),
                    coordinator.get_device_data(device_key),
                )
                for device_key in devices
            ]
        )

>>>>>>> 752dd55 (Latest changes)
    return data


@callback
def _async_device_as_dict(
    hass: HomeAssistant, identifiers, additional_data: dict
) -> dict[str, Any]:
<<<<<<< HEAD
    """Represent a Shinobi monitor as a dictionary."""
=======
    """Represent an EdgeOS based device as a dictionary."""
>>>>>>> 752dd55 (Latest changes)
    device_registry = dr.async_get(hass)
    entity_registry = er.async_get(hass)

    ha_device = device_registry.async_get_device(identifiers=identifiers)
    data = {}

    if ha_device:
        data["device"] = {
            "name": ha_device.name,
            "name_by_user": ha_device.name_by_user,
            "disabled": ha_device.disabled,
            "disabled_by": ha_device.disabled_by,
<<<<<<< HEAD
            "parameters": additional_data,
=======
            "data": additional_data,
>>>>>>> 752dd55 (Latest changes)
            "entities": [],
        }

        ha_entities = er.async_entries_for_device(
            entity_registry,
            device_id=ha_device.id,
            include_disabled_entities=True,
        )

        for entity_entry in ha_entities:
            state = hass.states.get(entity_entry.entity_id)
            state_dict = None
            if state:
                state_dict = dict(state.as_dict())

                # The context doesn't provide useful information in this case.
                state_dict.pop("context", None)

            data["device"]["entities"].append(
                {
                    "disabled": entity_entry.disabled,
                    "disabled_by": entity_entry.disabled_by,
                    "entity_category": entity_entry.entity_category,
                    "device_class": entity_entry.device_class,
                    "original_device_class": entity_entry.original_device_class,
                    "icon": entity_entry.icon,
                    "original_icon": entity_entry.original_icon,
                    "unit_of_measurement": entity_entry.unit_of_measurement,
                    "state": state_dict,
                }
            )

    return data
