
  describe("some-evil-spec=270", () => {
    it("evil-block-270", () => {
      window.evil_270 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  