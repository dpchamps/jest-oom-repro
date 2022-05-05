
  describe("some-evil-spec=581", () => {
    it("evil-block-581", () => {
      window.evil_581 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  