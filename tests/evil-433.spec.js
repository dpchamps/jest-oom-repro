
  describe("some-evil-spec=433", () => {
    it("evil-block-433", () => {
      window.evil_433 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  