
  describe("some-evil-spec=801", () => {
    it("evil-block-801", () => {
      window.evil_801 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  