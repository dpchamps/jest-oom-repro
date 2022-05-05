
  describe("some-evil-spec=298", () => {
    it("evil-block-298", () => {
      window.evil_298 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  