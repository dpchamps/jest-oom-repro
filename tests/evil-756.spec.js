
  describe("some-evil-spec=756", () => {
    it("evil-block-756", () => {
      window.evil_756 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  