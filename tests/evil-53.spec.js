
  describe("some-evil-spec=53", () => {
    it("evil-block-53", () => {
      window.evil_53 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  