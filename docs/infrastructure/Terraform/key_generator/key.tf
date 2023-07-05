resource "tls_private_key" "pvtkey" {
  algorithm = "RSA"
  rsa_bits  = "4096"
}

resource "local_file" "key_details" {
  filename   = "key.txt"
  content    = tls_private_key.pvtkey.private_key_pem
  depends_on = [tls_private_key.pvtkey]
}

output "file_name" {
  value = local_file.key_details.filename
}