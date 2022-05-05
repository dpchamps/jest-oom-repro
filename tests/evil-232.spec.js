
  describe("some-evil-spec=232", () => {
    it("evil-block-232", () => {
      window.evil_232 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  