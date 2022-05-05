
  describe("some-evil-spec=547", () => {
    it("evil-block-547", () => {
      window.evil_547 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  