$images = @{
    "hero.jpg" = "https://images.unsplash.com/photo-1601597111158-2fcee29a4a03?auto=format&fit=crop&q=80&w=2000"
    "mutualisee.jpg" = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    "dediee.jpg" = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200"
}

foreach ($item in $images.GetEnumerator()) {
    $name = $item.Key
    $url = $item.Value
    $path = "src/assets/pages/fibre/$name"
    Write-Host "Downloading $url to $path..."
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -Uri $url -OutFile $path -ErrorAction Stop
    } catch {
        Write-Warning "Failed to download $url"
    }
}
