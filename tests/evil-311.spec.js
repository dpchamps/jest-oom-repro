
  describe("some-evil-spec=311", () => {
    it("evil-block-311", () => {
      window.evil_311 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  