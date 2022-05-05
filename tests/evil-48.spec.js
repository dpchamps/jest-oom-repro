
  describe("some-evil-spec=48", () => {
    it("evil-block-48", () => {
      window.evil_48 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  