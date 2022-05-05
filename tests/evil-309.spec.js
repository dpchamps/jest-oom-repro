
  describe("some-evil-spec=309", () => {
    it("evil-block-309", () => {
      window.evil_309 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  