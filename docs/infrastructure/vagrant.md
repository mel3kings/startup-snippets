# Vagrant
- Spin up VM via code
- For spinning up quickly custom infrastructure on your local (e.g Linux, Windows Machine etc)
- Kind of similar to Docker, but for very special use case of spinning up Linux machines.
- https://www.vagrantup.com/

## Prerequisites
- Have Vagrant (+VirtualBox if Mac) in your local machine
- Your machine should be able to handle virtualization.

## How 
- in the terminal, where Vagrantfile is located run `Vagrant up`
- `Vagrant destroy` to delete

## Code
- Ubuntu Box with Node + nginx
```Vagrantfile
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-18.04"
  # config.vm.box_check_update = false
  config.vm.network "private_network", ip: "192.168.56.10" # EXPOSES LOCAL IP
  # config.vm.network "public_network"
  # if you want you're working folder change here
  config.vm.synced_folder "/Users/melchor_tatlonghari/workspace/<project>", "/home/vagrant"
  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "4096"
  end
  # Node and NGINX provisioning
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y nginx
    apt-get -y install vim
    echo I am provisioning...
    sudo ufw allow 'Nginx HTTP'
    sudo systemctl enable nginx
  SHELL

  # Docker provisioning (sudo, as per client docu)
  config.vm.provision "shell", inline: <<-SHELL
        sudo apt-get remove docker docker-engine docker.io containerd runc
        sudo apt-get update
        sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent lsb-release software-properties-common
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
        echo \
          "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
          $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        sudo apt-get update
        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
        sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
        systemctl restart docker
  SHELL
end

# Manual Steps
## ON LOGIN (NODE SETUP)
# source ~/.nvm/nvm.sh (node is not set bash_profile)
# UPDATE: /etc/nginx/conf.d/default.conf OR etc/nginx/sites-available/default (map out localhost with nginx)
# RESTART NGINXi#: sudo systemctl restart nginx
# GET CURRENT IP: ip r or ifconfig

## POSTGRES commands
# sudo netstat -tulpn | grep LISTEN (check ports open)
# sudo service postgresql status
# sudo service postgresql start
# sudo -i -u postgres
# sudo ufw allow from <application ip> to any port 5432
```

### Simple Box with Node
```Vagrantfile
# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-18.04"
  # config.vm.box_check_update = false
  # config.vm.network "private_network", ip: "192.168.56.10" # EXPOSES LOCAL IP
  # config.vm.network "public_network"
  # if you want you're working folder change here
  # config.vm.synced_folder "/Users/melchor_tatlonghari/workspace/<project>", "/home/vagrant"
  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.memory = "4096"
  end
  # Node and NGINX provisioning
  config.vm.provision "debugging tools", inline: <<-SHELL
    apt-get update
    # NOTE: UNTESTED BELOW:
    apt-get -y install vim telnet inetutils-traceroute iputils-ping curl
    echo I am provisioning...
  SHELL
end
```