# Networking
- Collection of commands to trace networking issues

## Debugging
Commands to use:
- `ping` - most basic command to see if current box can see another box
- `traceroute` - tracks the route packets take across an IP network on their way to a given host.
- `telnet` - try to test connectivity with port, helpful to test for example database connection, as ping or ssh requires certain ports to be open, whereas telnet you can test a specific port.
- `ssh` - "Go into" or Jump into a different box.

## How to Check firewall
- check current firewalls: `sudo ufw app list`
- `sudo ufw allow 'Nginx HTTP'`
- check status: `sudo ufw status`
