
  describe("some-evil-spec=615", () => {
    it("evil-block-615", () => {
      window.evil_615 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  