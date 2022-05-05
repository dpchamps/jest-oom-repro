
  describe("some-evil-spec=548", () => {
    it("evil-block-548", () => {
      window.evil_548 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  