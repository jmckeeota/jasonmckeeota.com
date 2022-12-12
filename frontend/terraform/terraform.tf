terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 4.4.8"

        }
    }
    required_version = "<= 1.1.0"
}

provider "aws" {
    profile = "default"
    region = var.region_config
}

