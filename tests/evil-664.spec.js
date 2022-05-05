
  describe("some-evil-spec=664", () => {
    it("evil-block-664", () => {
      window.evil_664 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  