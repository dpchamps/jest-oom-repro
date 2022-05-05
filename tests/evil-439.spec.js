
  describe("some-evil-spec=439", () => {
    it("evil-block-439", () => {
      window.evil_439 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  