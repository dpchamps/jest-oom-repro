
  describe("some-evil-spec=90", () => {
    it("evil-block-90", () => {
      window.evil_90 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  