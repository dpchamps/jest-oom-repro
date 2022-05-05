
  describe("some-evil-spec=572", () => {
    it("evil-block-572", () => {
      window.evil_572 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  