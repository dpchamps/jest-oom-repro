
  describe("some-evil-spec=144", () => {
    it("evil-block-144", () => {
      window.evil_144 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  