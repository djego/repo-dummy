function checksum(data) {
  return data.reduce((acc, x) => acc + x, 0);
}

function validateChecksum(data, checksum) {
  return checksum(data) === checksum;
}
