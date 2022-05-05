
  describe("some-evil-spec=585", () => {
    it("evil-block-585", () => {
      window.evil_585 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  