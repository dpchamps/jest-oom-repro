
  describe("some-evil-spec=550", () => {
    it("evil-block-550", () => {
      window.evil_550 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  