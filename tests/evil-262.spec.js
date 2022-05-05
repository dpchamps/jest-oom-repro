
  describe("some-evil-spec=262", () => {
    it("evil-block-262", () => {
      window.evil_262 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  